import csv
import pprint
import datetime
from collections import defaultdict

state = {}

with open('us-counties.csv', newline='') as File:  
    reader = csv.reader(File)
    for row in reader:
        if row[2] in state.keys():
            if row[1] in state[row[2]].keys():
                state[row[2]][row[1]][row[0]] = [int(row[4]), int(row[5])]
            else:
                state[row[2]][row[1]] = {'0000-00-00': 0}
        else:
            state[row[2]] = {}
        
    
l=[]
date = datetime.datetime.now()
for i in range(241):
    date -= datetime.timedelta(days=1)
    
    month=str(date.month)
    datee=str(date.day)
    if len(month) == 1:
        month='0'+month
    if len(datee)==1:
        datee='0'+datee
    l.append(str(date.year)+'-'+month+'-'+datee)
    
l.append(None)
l.append(None)
l=l[::-1]

with open('afterclean.csv',mode='w') as file:
    data = csv.writer(file)
    data.writerow(l)
    for states in state.keys():
        for county in state[states].keys():
            counts=[]
            for dates in l:
                if str(dates) not in state[states][county].keys():
                    counts.append(["cases: "+str(0),"deaths: "+str(0)])
                else:
                    counts.append(["cases: "+str(state[states][county][dates][0]),"deaths: "+str(state[states][county][dates][1])])
            counts=counts[4:-4]
            counts.insert(0, None)
            counts.insert(0, None)
            data.writerow([states,county])
            data.writerow(counts)