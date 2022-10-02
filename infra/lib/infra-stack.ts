import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { aws_cognito as cognito, aws_s3 as s3, RemovalPolicy } from 'aws-cdk-lib'

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    // The code that defines your stack goes here

    // s3
    const staticWebsiteBucket = new s3.Bucket(this, 'staticWebsiteBucket', {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    })

    // cognito user pool
    const userPool = new cognito.UserPool(this, 'MyUserPool', {
      userPoolName: 'sample-user-pool',
      selfSignUpEnabled: true,
      signInAliases: {
        email: true,
      },
      standardAttributes: {
        givenName: {
          required: true,
        },
        familyName: {
          required: true,
        },
      },
      customAttributes: {
        famiily_name_kana: new cognito.StringAttribute({ minLen: 1, maxLen: 256, mutable: true }),
        given_name_kana: new cognito.StringAttribute({ minLen: 1, maxLen: 256, mutable: true }),
      },
      passwordPolicy: {
        minLength: 10,
        requireLowercase: false,
        requireUppercase: false,
        requireDigits: false,
        requireSymbols: false,
        tempPasswordValidity: cdk.Duration.days(7),
      },
      lambdaTriggers: {},
      accountRecovery: cognito.AccountRecovery.EMAIL_ONLY,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    })

    // end
  }
}
