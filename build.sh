#!/bin/bash
source .env.build
docker build . -t $ACR_REPOSITORY_IMAGE:latest
docker push $ACR_REPOSITORY_IMAGE