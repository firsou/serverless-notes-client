const config = {
  STRIPE_KEY: "pk_test_51IdyFlAbm8n3sl2Wk1PwRkTNMfvK2TyAJ5XM4CCIW3Wa29YRZeNl0Rsre2gCLm9ePmDk3h9KttLpwEYChQ8J4WF700rmC83UvO",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "firsou-notes-app-upload",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://3uw8n2i6c9.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_5loPQYzac",
    APP_CLIENT_ID: "1c8k94e0j58s3ep07hd0as0sqc",
    IDENTITY_POOL_ID: "us-east-2:52feaa12-6872-4cd7-86b4-3ffd69c61157",
  },
};

export default config;