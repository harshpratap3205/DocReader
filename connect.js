// import { AzureKeyCredential, DocumentAnalysisClient } from "@azure/ai-form-recognizer";

const { AzureKeyCredential, DocumentAnalysisClient } = require("@azure/ai-form-recognizer");

/*
  Remember to remove the key from your code when you're done, and never post it publicly. For production, use
  secure methods to store and access your credentials. For more information, see 
  https://docs.microsoft.com/en-us/azure/cognitive-services/cognitive-services-security?tabs=command-line%2Ccsharp#environment-variables-and-application-configuration
*/
// console.log("hello")
// const test = document.querySelector('#file-input')
//         const btn = document.getElementById('submit')
//         function showName(){
//             console.log(test.value)
//         }
//         btn.addEventListener("click",()=>{
            
            
//             showName()
//         })


const key = "c03442fdd1604bee91aa820d513e3f14";
const endpoint = "https://docreaderproject.cognitiveservices.azure.com/";

// sample document
const invoiceUrl = "https://cdn-resources.highradius.com/resources/wp-content/uploads/2022/06/Invoice-Example.png"
// const invoiceUrl = test.value
// console.log(invoiceUrl)

async function main() {

    const client = new DocumentAnalysisClient(endpoint, new AzureKeyCredential(key));

    const poller = await client.beginAnalyzeDocument("prebuilt-invoice", invoiceUrl);

    const {
        documents: [result]
    } = await poller.pollUntilDone();

    if (result) {
        const invoice = result.fields;

        console.log("Vendor Name:", invoice.VendorName?.content);
        console.log("Customer Name:", invoice.CustomerName?.content);
        console.log("Invoice Date:", invoice.InvoiceDate?.content);
        console.log("Due Date:", invoice.DueDate?.content);

        console.log("Items:");
        for (const {
                properties: item
            } of invoice.Items?.values ?? []) {
            console.log("-", item.ProductCode?.content ?? "<no product code>");
            console.log("  Description:", item.Description?.content);
            console.log("  Quantity:", item.Quantity?.content);
            console.log("  Date:", item.Date?.content);
            console.log("  Unit:", item.Unit?.content);
            console.log("  Unit Price:", item.UnitPrice?.content);
            console.log("  Tax:", item.Tax?.content);
            console.log("  Amount:", item.Amount?.content);
        }

        console.log("Subtotal:", invoice.SubTotal?.content);
        console.log("Previous Unpaid Balance:", invoice.PreviousUnpaidBalance?.content);
        console.log("Tax:", invoice.TotalTax?.content);
        console.log("Amount Due:", invoice.AmountDue?.content);
    } else {
        throw new Error("Expected at least one receipt in the result.");
    }
}

main().catch((error) => {
    console.error("An error occurred:", error);
    process.exit(1);
});

