import math
class point:
	def __init__(self, x, y,activity=0):
		self.x=x
		self.y=y
		self.a=activity
	def __str__(self):
		return "{Point Object ("+str(self.x)+","+str(self.y)+"). activity = "+str(self.a)+"}"
	def eucliDistance(self, x,y):
		return ((x-self.x)**2 + (y-self.y)**2)**0.5
	def euclideanDistance(self, p):
		if isinstance(p,list):
			return self.eucliDistance(p[0],p[1])
		return self.eucliDistance(p.x,p.y)

class circle:
	def __init__(self, centre,radius):
		self.centre=centre
		self.radius=radius
		self.logLRz=0
	def __str__(self):
		return "{Circle object "+str(self.centre)+". Radius = "+str(self.radius)+". Log(LRz) = "+str(self.logLRz)+"}"
	def LieInside(self,p):
		if isinstance(p,point):
			if self.centre.euclideanDistance(p) <= self.radius:
				return True
			return False
		if isinstance(p,circle):
			if (self.centre.euclideanDistance(p.centre) + p.radius) <= self.radius:
				return True
			return False
	def areaPercentOverlap(self,c):
		if isinstance(c,circle):
			d=self.centre.euclideanDistance(c.centre)
			r=self.radius
			R=c.radius
			R,r=max(R,r),min(R,r)
			if d<(r+R):
				if R<(r+d):
					A = 0.5 * ((r+R-d)*(r+R+d)*(d+r-R)*(d+R-r))**0.5
					return (A/self.area())*100
				return 100.0
			return 0	
	def area(self):
		return math.pi * self.radius * self.radius
