import sys

if len(sys.argv) < 2:
    print 'to use: ' + sys.argv[0] + ' <filename>'
    sys.exit(1)
else:
    file = sys.argv[1]

t = "\t"

def tabulate(n):
    if n > 0:
        for i in range(0, n):
            f.write(t)

def newline(n):
    f.write("\n")
    tabulate(n)

f = open(file, "r+")
line = f.read()

tabs = 0
contained = 0 #0 not contained, 1 is contained --> [...]
linestart = 1 #1 is start of a new line, 0 is not
count = 0

f.seek(0)
for i in line:
    if i == '{':
        linestart = 1
        tabs += 1
    elif count+1 != line.__len__() and line[count+1] == '}':
        linestart = 1
        tabs -= 1
    elif contained == 0 and i == ',':
        linestart = 1
    else:
        linestart = 0
    if count+1 != line.__len__() and i == '[' and line[count+1] == '{':
        contained = 0
    elif i == '[':
        contained = 1
    elif i == ']':
        contained = 0
    f.write(i)
    if linestart == 1 and contained == 0:
        newline(tabs)

    count += 1
f.close()
print 'All done. Exiting now...'


