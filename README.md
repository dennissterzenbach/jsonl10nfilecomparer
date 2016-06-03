# jsonl10nfilecomparer
Tool to compare a list of JSON files to find missing or additional keys compared to a JSON master file.

Example command line:
```shell
$ node jsonfilecomparer.js master.json another.json even-another.json
```

This will compare 
* master.json with another.json
* master.json with even-another.json

The result is the output of each key found in master.json but missing in another.json and the other way around. 
And the same for the comparison of master.json with even-another.json too:
```
master: master.json

MISSING IN another.json:
[ 'global.cancel',
  'global.submit',
  'errorHandling' ]
ADDITIONAL IN another.json:
[ 'some-other-key-only-in-another.json' ]
```

It comes pretty handy for managing various JSON translation and configuration files. Which is the reason for the package name.
