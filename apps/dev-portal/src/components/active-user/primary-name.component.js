import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useEffect, useState } from 'react';
import {
  DEFAULT_USERNAME,
  getActiveUserContextIsLoading,
  getActiveUserPrimaryName,
} from './constants';
import { activeUserContextEffect } from './context.effect';

export const ActiveUserPrimaryName = () => {
  const [_, setState] = useState(Date.now());
  const { siteConfig: config } = useDocusaurusContext();

  const primaryName = getActiveUserPrimaryName(config);
  const isLoading = getActiveUserContextIsLoading(config);

  useEffect(() => {
    activeUserContextEffect(config, setState);
  }, []);

  if (!isLoading) {
    return DEFAULT_USERNAME;
  }

  return primaryName;
};
