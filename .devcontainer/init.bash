#!/bin/bash

DEFAULT_PROFILE='default'
DEFAULT_REGION='ap-northeast-1'
DEFAULT_OUTPUT='json'

npm install -g  aws-cdk@2.44.0

echo "generate the ~/.aws/config"
mkdir ~/.aws
cat << EOF > ~/.aws/config
[${DEFAULT_PROFILE}]
region = ${DEFAULT_REGION}
output = ${DEFAULT_OUTPUT}
EOF