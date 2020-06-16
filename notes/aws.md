---
title: AWS Stuff
tags:
  - AWS
  - S3
emoji: 🌳
link: 
---
Collection of AWS Command line Tools


### Copy all local folder contents to remote s3 Bucket
```shell script
aws s3 sync . s3://bucket_name/folder
```