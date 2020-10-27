import json
data={}    
cnt=0
with open("hotspots_satscan.txt","r") as inputFile:
    for line in inputFile:
        cnt+=1
        s=line.split()
        centre=s[4].split(",")
        centre[0]=centre[0][1:]
        centre[1]=centre[1][:len(centre[1])-2]
        data["circle"+str(cnt)]={
            "centre" : centre,
            "radius" : s[10][:len(s[10])-1],
            "LogLRZ" : s[13][:len(s[13])-1]
            }

with open('hotspots_satscan.json', 'w') as outfile:
    json.dump(data, outfile)