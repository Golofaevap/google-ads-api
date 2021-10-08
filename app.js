import { GoogleAdsApi } from "google-ads-api";
import { credentials } from "./credentials";

const client = new GoogleAdsApi({
    client_id: credentials.clientId,
    client_secret: credentials.clientSecret,
    developer_token: credentials.developerToken,
});

const customer = client.Customer({
    customer_account_id: "123-123-123",
    login_customer_id: "456-456-456", // Optionally provide a login-customer-id
    linked_customer_id: "789-789-789", // Optionally provide a linked-customer-id
    refresh_token: "<YOUR_REFRESH_TOKEN>",
});

// If done correctly, you should now be able to list the campaigns in the account 123-123-123
customer.campaigns.list();
