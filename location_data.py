import csv
import time
import sys
csv.field_size_limit(100000000)

start_time = time.time()
data = []

with open("us-county-boundaries.csv") as csv_file:
	csv_reader = csv.reader(csv_file, delimiter=";")
	line_number=0

	for row in csv_reader:
		line_number+=1
		if line_number==1:
			print(row[0],row[5],row[7])
			continue
		data.append([row[0],row[5],row[7]])

	print("Processed",line_number,"rows")
	print("time to complete Processing:",time.time()-start_time,"seconds")
with open("location_data.csv","w") as data_file:
	csv_writer = csv.writer(data_file,delimiter=";")
	csv_writer.writerow(['Location','CountyGeoId','NAME'])
	for row in data:
		csv_writer.writerow(row)

print("Completed exporting data")
print("Total time taken",time.time()-start_time,"seconds")