import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as cognito from 'aws-cdk-lib/aws-cognito'

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    // The code that defines your stack goes here

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
  }
}
