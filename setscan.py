import csv 
import math
import geometry
import random
import time
start_time = time.time()
points={}
totalCases=0
UsArea=154	# I just took a rough sample of (45,-114) to(36,-100)
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
  		if not (45>=coordinate[0]>=36 and -114<=coordinate[1]<=-100):
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

print("Reading Data completed.")
print("Time taken",time.time()-start_time,"seconds.")
print("Total cases:",totalCases)
print("Total counties considered:",len(points))

def setscan(pointList):
	circles = []
	for center in pointList:
		for boundary in pointList:
			if center==boundary:
				continue
			centerPoint=geometry.point(center[0][0],center[0][1],center[1])
			circles.append(geometry.circle(centerPoint,centerPoint.euclideanDistance(boundary[0])))

	for enumurateCircle in circles:
		B=totalCases * (enumurateCircle.area()/UsArea)
		c=0
		for p in pointList:
			ConsideredPoint = geometry.point(p[0][0],p[0][1],p[1])
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
	return circles

print("Starting generating Circles using set scan")
realCircles = setscan(list(points.values()))
print("completed generating Circles")
print("Time taken",time.time()-start_time,"seconds.")

print("Starting Monte Carlo Simulations")
m=35

maxLrzList=[]
for Simulations in range(m):
	pointlist={}
	for i in range(totalCases):
		x = random.uniform(36.1,45.1)
		y = random.uniform(-114.1,-100.1)
		generated_point=geometry.point(x,y)
		dist = 100
		closestPoint=None
		for p in points:
			d=generated_point.euclideanDistance(points[p][0])
			if d < dist:
				dist = d
				closestPoint=points[p][0]
		closestPoint=tuple(closestPoint)
		if closestPoint in pointlist:
			pointlist[closestPoint]+=1
		else:
			pointlist[closestPoint]=1
	RandomPoints=[]
	for i in pointlist:
		RandomPoints.append([[i[0],i[1]],pointlist[i]])
	circleList = setscan(RandomPoints)
	maxlikelyhoodfactor = 0
	for circle in circleList:
		maxlikelyhoodfactor = max(circle.logLRz, maxlikelyhoodfactor)
	maxLrzList.append(maxlikelyhoodfactor)
	if Simulations%5==0:
		print("completed Simulation:",Simulations+1)
		print("Time taken",time.time()-start_time,"seconds.")

print("completed all Simulations")
maxLrzList.sort(reverse=True)
print("Max Likely hood ratio list:",maxLrzList)

alphap=0.03

centercircles = {}
for c in realCircles:
	place=1
	for x in maxLrzList:
		if c.logLRz >= x:
			break
		place+=1
	pval = place/m
	if pval <= alphap:
		if (c.centre.x,c.centre,y) not in centercircles or c.logLRz>(centercircles[(c.centre.x, c.centre.y)].logLRz):
			centercircles[(c.centre.x, c.centre.y)] = c

hotspots=list(centercircles.values())
hotspots.sort(reverse=True, key = lambda itm: itm.logLRz)

alreadyshown=[]

OutputFile = open("hotspots_satscan.txt","w")

for c1 in hotspots:
	for c2 in alreadyshown:
		if  c1.areaPercentOverlap(c2)>=10 or c2.areaPercentOverlap(c1)>=10:
			break
	else:
		OutputFile.write(str(c1)+"\n")
		print(c1)
		alreadyshown.append(c1)

print("Process completed")
print("Time taken",time.time()-start_time,"seconds.")