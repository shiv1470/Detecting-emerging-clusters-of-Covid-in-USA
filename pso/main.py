import numpy as np
import pandas as pd
import json
from pso import ParticleSwarmOptimizedClustering
from utils import normalize

"""
flags - 
1. Normal PSO, No Radius approach, No Weight Consideration
2. Normal PSO, No Radius approach, Weight Consideration

"""
num_centroids=7
if __name__ == "__main__":
    data = open("seed3.txt","r")
    Flag=2
    topleftx,bottomrightx = 0,0
    toplefty,bottomrighty = 0,0
    x = []
    cases = []
    while(True):
        line = data.readline()
        if line == "":
            break
        line = list(map(float,line.split()))
        x.append([line[0],line[1]])
        cases.append(line[2])
    x = np.array(x)
    #print(x)
    pso = ParticleSwarmOptimizedClustering(
        n_cluster=num_centroids, n_particles=36, data=x, hybrid=False, flag = Flag, weights = cases)  #, max_iter=2000, print_debug=50)
    centroids=pso.run()
    radius = [0]*num_centroids
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
    elif Flag==3 or Flag==4:
        delta = 0.05
        for c in range(num_centroids):
            bestloglrz=0
            for rad in range(0.1,max(abs(topleftx-bottomrightx),abs(toplefty-bottomrighty),delta):
                loglrz = findloglrz(centroids[c],rad)
                if loglrz>bestloglrz:
                    radius[c]=rad
    data = {}
    x = []
    for i in range(num_centroids):
        x.append({"centre" : list(centroids[i]), "radius" : radius[i]})
    data["hotspots"] = x
    with open('hotspots_pso.json', 'w') as outfile:
        json.dump(data, outfile,indent = 2)