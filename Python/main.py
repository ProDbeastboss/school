from math import *
import os

os.system('cls' if os.name == 'nt' else 'clear')

print ('Welcome to the Encryptor!')
print ('\n\n')
print ('Encrypt, Decrypt, or get Keys?')
print ('\n\n\n\n')
action = input('>> ')

os.system('cls' if os.name == 'nt' else 'clear')

if action == 'encrypt' or action == 'Encrypt' or action == 'e':
    print ('Please enter Public Key')
    print ('\n')
    print ('it should look like this (437258702,673492067)')
    print ('\n\n\n\n')
    publickeyinput = input('>> ')
    publickey = publickeyinput.split(',')

    os.system('cls' if os.name == 'nt' else 'clear')

    print ('Please enter text to encrypt')
    print ('\n\n\n\n')
    rawtexttoencrypt = input('>> ')

    os.system('cls' if os.name == 'nt' else 'clear')

    #asciitoencrypt = [ord(character) for character in rawtexttoencrypt]
    #i = 0
    #while i < len(asciitoencrypt):
    #    asciitoencrypt[i] = str('%03d' % int(asciitoencrypt[i]))
    #    i += 1
    #texttoencrypt = int(''.join(asciitoencrypt))
    texttoencrypt = 104105

    encryptedtext = (texttoencrypt ** int(publickey[1])) % int(publickey[0])
    print(encryptedtext)

    derypted = (encryptedtext ** 47) % int(publickey[0])

    print(derypted)
    print ('\n\n\n\n')
    input ('Press enter to exit ')
    os.system('cls' if os.name == 'nt' else 'clear')