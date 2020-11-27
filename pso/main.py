import numpy as np
import pandas as pd

from pso import ParticleSwarmOptimizedClustering
from utils import normalize
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
        n_cluster=4, n_particles=16, data=x, hybrid=False)  #, max_iter=2000, print_debug=50)
    pso.run()
