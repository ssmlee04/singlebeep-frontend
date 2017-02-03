#!/usr/bin/env bash
BUCKET=prod-frontend.singlebeep.com
DIR=dist/production/
aws s3 sync $DIR s3://$BUCKET/ --region us-west-2

aws configure set preview.cloudfront true
aws cloudfront create-invalidation --distribution-id E1WY345AB4PAHX --paths /index.html /error.html /