# ETL with NodeJS

## Extract 

The first step in a Node ETL (Extract, Transform, Load) pipeline is to extract the data that we will be transforming and loading. In this tutorial, we will be creating the extract step in our ETL pipeline in order to extract the data we need from the data source and write the query for extraction.

## transform

The goal of the transform step in a Node ETL (Extract, Transform, Load) pipeline is to take the data from the data source and make it fit into the format we want it to be in for the destination. We can rename fields, add new fields, and filter out unnecessary data. Transforming the data in Node is simple once it’s been extracted.

##  transform

We’ll be transforming planet records from the  API into a different, easier-to-use format. We can do this by renaming keys, removing data points we aren't interested in, and computing new values from existing values.

Now that we have our transformed planet data in our Node ETL (Extract, Transform, Load) pipeline, we need to load it to its destination. We are going to be writing the data to a JSON flat file on the file system, but you might be loading your data into a database or data warehouse. The important part is that we are sending the transformed data to the destination we need it to be in order to utilize the data, which is the final stage of an ETL pipeline.


![etl](https://github.com/wal-wizard/ETL-with-NodeJS/assets/82295321/d9d928b3-408e-4fce-a2d6-aa30c0c3058b)






