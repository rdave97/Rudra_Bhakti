# Rudra_Bhakti
This assignment we have done in a group of 2 people: 1) Rudra Mayur Dave, 2)Bhakti Shastri.
Open the file in any text editor

Make sure that you have latest version of node.js and latest version of docker installed in your system.
Now open the command line interface and run the docker command inorder to open docker 
Run the following in your CLI:
mkdir [File_Name]
cd [File_Name]
npm init
touch app.js
touch Dockerfile
code . (to go to your text editor)
Now in your text editor run the following command in the terminal 
npm install --save express
Now, json file has all the database 
app.js file has all the Restful Webservice and it's get routes 
Now you can check your localhost where you have given your port number in node js using node app.js in your terminal.

Now to Docekrize node express js file we have to follow the certain commands in our previously installed dockerfile.
To build the image 
Docker build -t <imagename> . 
To check the image: Docker image ls
To open the Docker Container:
Docker run -p [port_number]:[port_number] [image_name]
After this your server has been started on the given port number
