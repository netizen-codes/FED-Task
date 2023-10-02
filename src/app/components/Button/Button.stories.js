import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

const stories = storiesOf('Button', module);

stories
  .add('with primary type', () => <Button type='primary'>Click me</Button>)
  .add('with secondary type', () => <Button type='secondary'>Click me</Button>)
  .add('with tertiary type', () => <Button type='tertiary'>Click me</Button>)
