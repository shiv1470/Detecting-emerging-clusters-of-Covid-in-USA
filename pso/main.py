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
num_centroids=4
if __name__ == "__main__":
    data = open("seed3.txt","r")
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
        n_cluster=num_centroids, n_particles=16, data=x, hybrid=False, flag = 1)  #, max_iter=2000, print_debug=50)
    centroids=pso.run()
    radius = [0]*num_centroids
    for i in x:
        min_dist = 100000
        index = -1
        for j in range(num_centroids):
            d = np.linalg.norm(i-centroids[j])
            if d < min_dist:
                min_dist = d
                index  = j
        radius[index]=max(radius[index], min_dist)
    data = {}
    x = []
    for i in range(4):
        x.append({"centre" : list(centroids[i]), "radius" : radius[i]})
    data["hotspots"] = x
    with open('hotspots_pso.json', 'w') as outfile:
        json.dump(data, outfile,indent = 2)