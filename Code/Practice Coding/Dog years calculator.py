# Write a Python console program that calculates a dog's age in dog's years given human years.

#Note: For the first two years, a dog year is equal to 10.5 human years. After that, each dog year equals 4 human years.

#Your program should look as follows:



#Input a dog's age in human years var = human years: 
#if humans years is <=2years 
# then dog years equals 10.5 years times humanyears
#else (dog years)= time 4 human years

#Output: The dog's age in dog's years is .


humanyears = int(input("Input a dog's age in human years"))

if  humanyears <= 2:
    dogyears = humanyears * 10.5

else: dogyears = 21 + (humanyears - 2)*4

print ("The dog's age in dog years is", dogyears)


