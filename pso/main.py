import numpy as np
import pandas as pd
import json
from pso import ParticleSwarmOptimizedClustering
from utils import normalize
num_centroids=4
if __name__ == "__main__":
    data = open("seed3.txt","r")
    x = []
    while(True):
        line = data.readline()
        if line == "":
            break
        x.append(list(map(float,line.split())))
    x = np.array(x)
    print(x)
    pso = ParticleSwarmOptimizedClustering(
        n_cluster=num_centroids, n_particles=16, data=x, hybrid=False)  #, max_iter=2000, print_debug=50)
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
    for i in range(4):
        data[i] = {"centre" : list(centroids[i]), "radius" : radius[i]}
    with open('hotspots_pso.json', 'w') as outfile:
        json.dump(data, outfile,indent = 2)