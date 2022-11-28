print("""Welcome to the weight loss calculator!
--------------------------------------""")

age = int(input("To start what is your age: "))
if age < 18:
    WuA = int(input("You are under the age of 18, Enter your weight in lbs: "))
    underkg = (WuA // 2.19)
    understone = (WuA // 13.9)
    print("Your wight is",WuA,"lbs or",underkg,"kg or",understone,"stone")
    main = (WuA * 15)
    print("Your maintainence weight kcal is", main)
    underkcal = (main - 700)
    print("To lose weight you should eat", underkcal)
    
    
if age >= 18:
    Oa = int(input("Enter your weight in lbs: "))
    kg = (Oa // 2.19)
    stone = (Oa // 13.9)
    print("Your wight is",Oa,"lbs or",kg,"kg or",stone,"stone")
    main2 = (Oa * 15)
    print("Your maintainence weight kcal is", main2)
    kcal = (main2 - 500)
    print("To lose weight you should eat", kcal)
    
q1 = input("Would you like to workout? (y/n): ")
workoutdays=[]
while q1 == "y":
    workoutdays.append (input("What day would you like to work out: "))
    YorN = input("Do you want to add another day? (y/n): ")
    if YorN =="n":
        print(workoutdays,"are the days you will workout, goodbye.")
        break







    

    


    



    



    




