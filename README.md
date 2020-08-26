# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## How to init
```
cdk init app --language typescript
```

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## Example : How to create a AWS SQS

1. add dependency in package.json

```
"@aws-cdk/aws-sqs": "1.57.0"
```

2. Create new queue(SQS)
You can create new queue whose name is hello-queue.

```typescript
    new Queue(this, "hello-queue", {
      queueName: "hello-queue"
    });
```

3. Check CloudFormation template
`synth` is abbreviation of `synthesize`. It takes the cloudformation template from your application.
This command will create cdk.out folder which has cloudformation stack info. It doesn't create SQS physically.

```sh
npx cdk synth
```

4. Create a queue
It will create SQS physically.

```sh
npx cdk deploy
```
