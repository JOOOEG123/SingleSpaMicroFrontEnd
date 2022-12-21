declare var $ENV: Env;

interface Env {
  ENVIRONMENT: string;
  SomeAPIKey: string;
  SomeOtherAPIKey: string;
  [x: string]: any;
}
