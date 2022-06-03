from math import *

#public key  = (n = 91, e = 23)
#private key = (n = 91, d = 47)

#c(m) = m^e mod n

#m(c) = c^d mod n

m=104105033
n=91
e=23
d=47

c=(m**e)%n #encode text
print(c) #print encoded text
print((c**d)%n) #print decoded text