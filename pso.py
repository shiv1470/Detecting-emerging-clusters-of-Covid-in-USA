import csv 
import math
import geometry
import random
import time
start_time = time.time()
points={}
totalCases=0
UsArea=154	# I just took a rough sample of (45,-114) to(36,-100)
topleftx,toplefty = 36,-114
bottomrightx,bottomrighty = 45, -100

number_of_iteration = 100
number_of_cluster = 2       # K

tempfile = open("seed3.txt","w")

with open('location_data.csv', mode ='r')as file: 
    
  csvFile = csv.reader(file,delimiter=";") 
  lineNumber = 0
  for line in csvFile:
    lineNumber+=1
    if lineNumber==1 or lineNumber%2==0:
      continue
    coordinate=line[0].split(",")
    coordinate[0]=float(coordinate[0])
    coordinate[1]=float(coordinate[1])
    if not (topleftx<=coordinate[0]<=bottomrightx and toplefty<=coordinate[1]<=bottomrighty):
      continue
    caseCount=0 #int(line[3])
    points[int(line[1])]=[coordinate,caseCount]

  with open("us-counties.csv", mode = "r") as file:
   	csvFile = csv.reader(file,delimiter=",")
   	lineNumber = 0
   	for line in csvFile:
   		lineNumber+=1
   		try:
  		 	if line[0]=="2020-09-04":
   				if int(line[3]) in points:
   					points[int(line[3])][1] -= int(line[4])
   			if line[0]=="2020-09-05":
   				if int(line[3]) in points:
   					points[int(line[3])][1] += int(line[4])
   					if points[int(line[3])][1] <0:
   						points[int(line[3])][1]=0
   					totalCases+=points[int(line[3])][1]
   		except:
   			continue
  for p in points:
    tempfile.write(str(points[p][0][0])+" "+str(points[p][0][1])+" "+str(points[p][1])+"\n")
print("Reading Data completed.")
print("Time taken",time.time()-start_time,"seconds.")
print("Total cases:",totalCases)
print("Total counties considered:",len(points))
