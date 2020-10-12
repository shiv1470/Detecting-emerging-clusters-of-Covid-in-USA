import csv 
import math
import geometry
points={}
totalCases=0
UsArea=10000	# to be verified from sources; I just took a rough estimate
with open('testdata.csv', mode ='r')as file: 
    
  csvFile = csv.reader(file,delimiter=";") 
  lineNumber = 0
  for line in csvFile:
  		lineNumber+=1
  		if lineNumber==1 or lineNumber%2==0:
  			continue
  		coordinate=line[0].split(",")
  		coordinate[0]=float(coordinate[0])
  		coordinate[1]=float(coordinate[1])
  		caseCount=int(line[3])
  		points[int(line[1])]=[coordinate,caseCount]
  		totalCases+=caseCount

circles = []

for center in points:
	for boundary in points:
		if center==boundary:
			continue
		centerPoint=geometry.point(points[center][0][0],points[center][0][1],points[center][1])
		circles.append(geometry.circle(centerPoint,centerPoint.euclideanDistance(points[boundary][0])))
for enumurateCircle in circles:
	B=totalCases * (enumurateCircle.area()/UsArea)
	c=0
	for p in points:
		ConsideredPoint = geometry.point(points[p][0][0],points[p][0][1],points[p][1])
		if enumurateCircle.LieInside(ConsideredPoint):
			c+=ConsideredPoint.a
	logLRz = 0
	#print(totalCases,B,c)
	if totalCases==c:
		logLRz = -math.inf
	elif c>B:
		logLRz+=c*math.log(c/B)
		logLRz+=(totalCases-c)*math.log((totalCases-c)/(totalCases-B))
	enumurateCircle.logLRz=logLRz
for x in circles:
	print(x)