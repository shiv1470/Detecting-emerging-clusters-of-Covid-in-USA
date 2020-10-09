# -*- coding: utf-8 -*-
"""
Created on Fri Oct  9 19:37:10 2020

@author: Divyanshu
"""

import random
import math
import matplotlib.pyplot as plt

#This to be changed for our code
def obj_func(x):
    y=3*(1-x[0])**2*math.exp(-x[0]**2-(x[1]+1)**2)-10*(x[0]/5 -x[0]**3-x[1]**50)*math.exp(-x[0]**2-x[1]**2)
    return y

bounds=[(-3,3),(-3,3)] #contraints should be modified
nv=2
mm=1

particle_size=100
iterations=500
w=0.95
c1=2
c2=2

class Particle:
    def __init__(self,bounds):
        self.particle_pos=[]
        self.particle_velocity=[]
        self.local_best_particle_pos=[]
        self.fitness_local_best_particle_pos=initial_fitness
        self.fitness_particle_pos=initial_fitness
        
        for i in range(nv):
            self.particle_pos.append(random.uniform(bounds[i][0],bounds[i][1])) #generate random initial position
            self.particle_velocity.append(random.uniform(-1,1)) #generate random velocity
    
    def evaluate(self,obj_func):
        self.fitness_particle_pos=obj_func(self.particle_pos)
        if mm==-1:
            if self.fitness_particle_pos< self.fitness_local_best_particle_pos:
                self.local_best_particle_pos=self.particle_pos
                self.fitness_local_best_particle_pos=self.fitness_particle_pos
        if mm==1:
            if self.fitness_particle_pos>self.fitness_local_best_particle_pos:
                self.local_best_particle_pos=self.particle_pos
                self.fitness_local_best_particle_pos=self.fitness_particle_pos
        
    
    def update_velocity(self,global_best_particle_pos):
        for i in range(nv):
            r1=random.random()
            r2=random.random()
           
            
            cognitive_velocity=c1*r1*(self.local_best_particle_pos[i]-self.particle_pos[i])
            social_velocity=c2*r2*(global_best_particle_pos[i]-self.particle_pos[i])
            self.particle_velocity[i]=w*self.particle_velocity[i]+cognitive_velocity+social_velocity
    
    def update_position(self,bounds):
        for i in range(nv):
            self.particle_pos[i]=self.particle_pos[i]+self.particle_velocity[i]
            
            #check and adjust values to satisfy the upper bounds
            if self.particle_pos[i]>bounds[i][1]:
                self.particle_pos[i]=bounds[1][1]
            
            #check and adjust to satisfy lower bounds
            if self.particle_pos[i]<bounds[i][0]:
                self.particle_pos[i]=bounds[i][0]

class PSO():
    def __init__(self,obj_func,bounds,particle_size,iterations):
        fitness_global_best_particle_pos=initial_fitness
        global_best_particle_pos=[]
        
        swarm_particle=[]
        for i in range (particle_size):
            swarm_particle.append(Particle(bounds))
        
        
        A=[]
        for i in range(iterations):
            for j in range(particle_size):
              swarm_particle[j].evaluate(obj_func)
              
              if mm==-1:
                  if swarm_particle[j].fitness_particle_pos<fitness_global_best_particle_pos:
                      global_best_particle_pos=list(swarm_particle[j].particle_pos)
                      fitness_global_best_particle_pos=float(swarm_particle[j].fitness_particle_pos)
              if mm==1:
                  if swarm_particle[j].fitness_particle_pos>fitness_global_best_particle_pos:
                      global_best_particle_pos=list(swarm_particle[j].particle_pos)
                      fitness_global_best_particle_pos=float(swarm_particle[j].fitness_particle_pos)
                
            for j in range(particle_size):
                 swarm_particle[j].update_velocity(global_best_particle_pos)
                 swarm_particle[j].update_position(bounds)
                 
            A.append(fitness_global_best_particle_pos) #record the best fitness
        
        print('Optimal Solution',global_best_particle_pos)
        print('Objective function value',fitness_global_best_particle_pos)
        print('Evolutionary process of the objective function value')
        plt.plot(A)
        

if mm==-1:
    initial_fitness=float('inf')
if mm==1:
    initial_fitness=-float('inf')
    
PSO(obj_func,bounds,particle_size,iterations)
