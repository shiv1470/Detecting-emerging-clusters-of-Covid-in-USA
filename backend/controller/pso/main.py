import numpy as np
import pandas as pd
import json
import math
import time
from random import uniform
from pso import ParticleSwarmOptimizedClustering
from utils import normalize
import sys

#print(sys.argv[2])

start_time = time.time()

"""
flags - 
1. Normal PSO, No Radius approach, No Weight Consideration
2. Normal PSO, No Radius approach, Weight Consideration
3. Normal PSO, Radius approach, No Weight Consideration
4. Normal PSO, Radius approach, Weight Consideration
"""
num_centroids = 7
num_particle = 36
Flag = 3
topleftx,bottomrightx = 36,45
toplefty,bottomrighty = -114,-100
num_simul = 30
alphap = 0.04
ConsideredArea = abs(topleftx-bottomrightx)*abs(toplefty - bottomrighty) 
if __name__ == "__main__":
    #data = open("seed3.txt","r")
    data = open("E:\\Major\\Detecting-emerging-clusters-of-Covid-in-India\\backend\\controller\\pso\\seed3.txt","r")
    x = []
    cases = []
    county_count = 0
    while(True):
        line = data.readline()
        if line == "":
            break
        line = line.split()
        x.append([float(line[0]),float(line[1])])
        cases.append(int(line[2]))
        county_count += 1
    x = np.array(x)
    #print(x)
    total_cases=sum(cases)
    def findloglrz(center, radius, cases):
        global x,total_cases,ConsideredArea,county_count
        #print(center,radius)
        B = total_cases*((3.1415926535*radius*radius)/ConsideredArea)
        c = 0
        for i in range(county_count):
            if np.linalg.norm(center-x[i]) <= radius:
                c+=cases[i]
        if c==total_cases:
            return -math.inf
        l=0
        if c>B:
            l+=c*math.log(c/B)
            l+=(total_cases-c)*math.log((total_cases-c)/(total_cases-B))
        return l

    def RunPso(num_centroids, num_particle, Flag, cases):
        global x
        pso = ParticleSwarmOptimizedClustering(
            n_cluster=num_centroids, n_particles=36, data=x, hybrid=False, flag = Flag, weights = cases)  #, max_iter=2000, print_debug=50)
        centroids=pso.run()
        radius = [0]*num_centroids
        loglrzs = [-1]*num_centroids
        if Flag==1 or Flag==2:
            for i in x:
                min_dist = 100000
                index = -1
                for j in range(num_centroids):
                    d = np.linalg.norm(i-centroids[j])
                    if d < min_dist:
                        min_dist = d
                        index  = j
                radius[index]=max(radius[index], min_dist)
            for i in range(num_centroids):
                loglrzs[i] = findloglrz(centroids[i],radius[i],cases)
            return [centroids,radius,loglrzs]
        elif Flag==3 or Flag==4:
            delta = 0.05
            loglrzs = [-1]*num_centroids
            for c in range(num_centroids):
                bestloglrz=0
                rad = 0.05
                top = max(abs(topleftx-bottomrightx),abs(toplefty-bottomrighty))
                while rad<top:
                    loglrz = findloglrz(centroids[c],rad,cases)
                    if loglrz>bestloglrz:
                        radius[c]=rad
                        bestloglrz=loglrz
                        loglrzs[c]=bestloglrz
                    rad+=delta
            return [centroids,radius,loglrzs]
        return None
    Results = RunPso(num_centroids,num_particle,Flag,cases)
    print(Results)
    print("Time taken:",time.time()-start_time)
    ##MONTE CARLO SIMULATION#################
    maxLrzList = []
    for simulations in range(num_simul):
        cases_simul = [0]*county_count
        for case_num in range(total_cases):
            X,Y =uniform(topleftx,bottomrightx),uniform(toplefty,bottomrighty)
            p = np.array([X,Y])
            mini,idx = 1000,-1
            for i in range(county_count):
                d = np.linalg.norm(p-x[i])
                if d<mini:
                    mini = d
                    idx = i
            cases_simul[idx]+=1
        Result_simul = RunPso(num_centroids,num_particle,Flag,cases_simul)
        maxLrzList.append(max(Result_simul[2]))
        if simulations%10==9:
            print("Completed simulation:",simulations+1)
    ###SIMULATIONS COMPLETED###
    maxLrzList.sort(reverse=True)
    print(maxLrzList)
    print("Time Taken: ", time.time()-start_time)
    data = {}
    x = []
    for i in range(num_centroids):
        place = 1
        for llrz in maxLrzList:
            if Results[2][i]>=llrz:
                break
            place+=1
        pval = place/num_simul
        if pval <= alphap:
            x.append({"centre" : list(Results[0][i]), "radius" : Results[1][i]})
    data["hotspots"] = x
    with open('hotspots_pso.json', 'w') as outfile:
        json.dump(data, outfile,indent = 2)
    print("Total Time Taken: ",time.time()-start_time)