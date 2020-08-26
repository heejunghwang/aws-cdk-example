import * as cdk from '@aws-cdk/core';
import { Queue } from "@aws-cdk/aws-sqs";

export class AwsCdkExampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // NOTE : first parameter is this because you are creating the Construct in this context of this context (parent context)
    new Queue(this, "hello-queue", {
      queueName: "hello-queue"
    });
  }
}
