# fruitAPI 
create a private API using basic auth to fulfill the capstone project Bangkit 2022
we use cloud function in gcp, because use cloud function serverless, easy to use
## how to start :
1. Open google cloud project account
2. Open cloud console and set to code editor from the top right corner
3. make a directory and set name for your API ```mkdir fruitAPI```
4. open folder ```cd fruitAPI```
5. clone repo ``` https://github.com/Bangkit-C22-PS021/fruitAPI.git ```
6. install npm ``` npm i ```
7. deploy to cloud function ``` $ gcloud beta functions deploy fruitAPI --trigger-http --runtimenodejs16```
8. The console output will give you link to test you API. You can test it in postman (or in the browser) by navigating to
https://your.console.outputuri/fruitAPI

##Note
after endpoint you must input api_key
example https://your.console.outputuri/fruitAPI?api_key=abcd

api_key available
- abcd
- caaf
- cdaf


