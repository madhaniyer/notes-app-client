export default {
    s3: {
        REGION: "us-east-2",
        BUCKET: "upload-notes-app-bucket",
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://s1yy8m4t99.execute-api.us-east-2.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_WqPdbYHCZ",
        APP_CLIENT_ID: "6jv3dtb4dqd7tjsot96oq4uh7e",
        IDENTITY_POOL_ID: "us-east-2:f68e8c2c-a6ab-470d-bae0-fe3a77173650"
    },
    MAX_ATTACHMENT_SIZE: 5000000
}