
This project demonstrates how to use Azure's Form Recognizer service to extract information from documents using the JavaScript SDK. It includes an example of analyzing a document from a URL and retrieving structured data.

## Prerequisites

Before you begin, ensure you have the following:

- **Node.js**: Install Node.js (v14 or higher) from [Node.js official website](https://nodejs.org/).
- **Azure Account**: An active Azure account. If you don't have one, you can create a free account [here](https://azure.microsoft.com/free/).
- **Azure Form Recognizer Resource**: Create a Form Recognizer resource in the Azure portal and obtain the following:
  - **Endpoint**: The URL endpoint of your Form Recognizer resource.
  - **API Key**: The key associated with your Form Recognizer resource.

## Getting Started


  ## step 1: make your azureportal account
 first open your azure portal and then signin with your email id and provides your credit card or debit card (only master or visa cards are acceptable)
 its will deduct you 2 rupee for account creation.
![image](https://github.com/user-attachments/assets/ebecbb79-ba45-4133-b0c2-fc2070053d1b)


 ## step 2: open azure resource dashboard
 ![image](https://github.com/user-attachments/assets/63d5cb3c-e72d-4dc0-9d16-f9f6d70e4eac)

## step 3: activate your free trial subscription
 Go to subscription and activate your free trial and get $200 for 30 days 
![Screenshot 2024-09-10 121812](https://github.com/user-attachments/assets/185b82bc-5acd-4ed5-89b2-e4cbea2c5497)
 give name to your resource 

## step 4: create your resource
Go to you search bar and search document intelligence and select your resources
![image](https://github.com/user-attachments/assets/43e1b1eb-7fe3-490d-9fbe-b04a05d838d7)
give name to your resource 
![image](https://github.com/user-attachments/assets/10231a69-46b5-417f-94fb-e64d912996c0)
click  to create + review to deploy your project wait for deployement

## step 5: finding keys and endpoint
click on your resource which you created

![image](https://github.com/user-attachments/assets/3c66e37d-576e-43a7-bd87-dc9581aac953)
 go to resource management and click on keys and endpoints
 and copy  your key and endpoints
 ![image](https://github.com/user-attachments/assets/4a1001c7-62a0-4193-a992-6bb5a4d5f47e)
warning: do not share your key and end point with others

 ## step 6: run your project with the use of azure studio

![image](https://github.com/user-attachments/assets/bf47ec68-6e8a-40ef-8514-e1d6aed26aa9)
click on "go to documnet intelligence studio"
now, you have various of template to use type of document (invoice,layout,reciept,others)
you have to choose one of them
![image](https://github.com/user-attachments/assets/c4c2be43-1f83-49bb-b744-95320f670187)
  for example we using invoice template 
  ![image](https://github.com/user-attachments/assets/59bc00e0-e443-4206-a649-3ac0d25abc1e)
now select your document to find out the insights
  now click on run 
  ![image](https://github.com/user-attachments/assets/98121405-cab7-47b8-9149-f684ef12e1da)
so here we have all the insights of your documents in our right corners
## step 7: get the code of this template 
see right side click on code section and chosse any of language like (python, javascript,
c#) and copy your code .here we selecting javascript language
![image](https://github.com/user-attachments/assets/6c0d92a7-3210-4dc9-9cbc-2dd0d8962eae)

## step 8: create your project in vs code
make a folder of code which you copy and paste it in .js extension

## step 9: Install Dependencies
Enure you have Node.js installed, then install the project dependencies:
```bash
npm install
```
## step 10: Set Up  Variables
// paste your variables key and endpoint from your your resource
const key = "c03442fdd1604bee91aa820d513e3f14";
const endpoint = "https://docreaderproject.cognitiveservices.azure.com/";
give your image url in this code
``
## step 11: install dependencies @azure/ai-form-recognizer
npm i @azure/ai-form-recognizer

## step 12: run file
node main.js
![image](https://github.com/user-attachments/assets/f51be5f3-d570-4e73-b6e3-898808de5016)


## step 13: Clone the Repository
you can make clone of this project from my repositary
harshpratap3205 (DocReader) 
contributers:
pathiadarsh(trainer)
pradeep-nk(teammates)
harsh-bajpay(teammates)

