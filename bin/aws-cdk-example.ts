#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkExampleStack } from '../lib/aws-cdk-example-stack';

const app = new cdk.App();
new AwsCdkExampleStack(app, 'AwsCdkExampleStack');
