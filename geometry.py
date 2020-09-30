
class point:
	def __init__(self, x=0, y=0):
		self.x=x
		self.y=y
	def __init__self(self,li):
		if len(li)==2:
			self.x=li[0]
			self.y=li[1]
		elif len(li)==1:
			self.x=li[0]
			self.y=0
		else:
			self.x=0
			self.y=0
	def euclideanDistance(self, x,y):
		return ((x-self.x)**2 + (y-self.y)**2)**0.5
	def euclideanDistance(self, p):
		return self.euclideanDistance(p.x,p.y)

class circle:
	def __init__(self, centre=point(),radius=0):
		self.centre=centre
		self.radius=radius
	
	def isItInside(self,p):
		if isinstance(p,point):
			if self.centre.euclideanDistance(p) <= self.radius:
				return True
			return False
		if isinstance(p,circle):
			if (self.centre.euclideanDistance(p.centre) + p.radius) <= self.radius:
				return True
			return False
