import json
data={}    
data['circle'] = []
with open("hotspots_satscan.txt","r") as inputFile:
    for line in inputFile:
        s=line.split()
        centre=s[4].split(",")
        centre[0]=centre[0][1:]
        centre[1]=centre[1][:len(centre[1])-1]
        data["circle"].append({
            "centre" : centre,
            "radius" : s[8][:len(s[8])-1],
            "LogLRZ" : s[11][:len(s[11])-1]
            })

with open('hotspots_satscan.json', 'w') as outfile:
    json.dump(data, outfile)