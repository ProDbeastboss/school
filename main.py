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
    print ('Please enter Key')
    print ('\n')
    print ('it should look like this (437258702673492067742745)')
    print ('\n\n\n\n')
    publickeyinput = input('>> ')

    os.system('cls' if os.name == 'nt' else 'clear')

    print ('Please enter text to encrypt')
    print ('\n\n\n\n')
    rawtexttoencrypt = input('>> ')

    os.system('cls' if os.name == 'nt' else 'clear')

    asciitoencrypt = [ord(character) for character in rawtexttoencrypt]
    i = 0
    while i < len(asciitoencrypt):
        asciitoencrypt[i] = str('%03d' % int(asciitoencrypt[i]))
        i += 1
    texttoencrypt = int(''.join(asciitoencrypt))

    message = texttoencrypt * int(publickeyinput)

    print(message)
    print ('\n\n\n\n')
    input ('Press enter to exit ')
    os.system('cls' if os.name == 'nt' else 'clear')


if action == 'decrypt' or action == 'Decrypt' or action == 'd':
    print ('Please enter Key')
    print ('\n')
    print ('it should look like this (437258702673492067742745)')
    print ('\n\n\n\n')
    publickeyinput = input('>> ')

    os.system('cls' if os.name == 'nt' else 'clear')

    print ('Please enter text to decrypt')
    print ('\n\n\n\n')
    rawtexttodecrypt = input('>> ')

    os.system('cls' if os.name == 'nt' else 'clear')

    mathedmessage = int(rawtexttodecrypt) / int(publickeyinput)
    rawmessage = [str(mathedmessage)[i:i + 3] for i in range(0, len(str(mathedmessage)), 3)]
    message = [chr(character) for character in rawmessage]

    print(message)
    print ('\n\n\n\n')
    input ('Press enter to exit ')
    os.system('cls' if os.name == 'nt' else 'clear')
    45520817241823891712358468225