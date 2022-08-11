#Write a Python program to convert month name to a number of days.
#Your program should look as follows: 
#Input the name of Month: February                                  
#No. of days: 28/29 days 


month = (input("Input the name of the Month:"))

if month == "February":
    print ("No. of days: 28/29")
elif month == ("April", "June", "September", "November"):
    print ("No. of days: 30")
elif month == ("January","March","May", "July", "August", "October", "December"):
    print ("No. of days is: 31")
else: print ("Please enter a month")