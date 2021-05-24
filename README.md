# Daniel Wellington

## Table of Contents

1. [Purpose](#purpose)
2. [Requirements](#requirements)
3. [Getting Started](#getting-started)
4. [Application Structure](#application-structure)
5. [Server Application Structure](#server-application-structure)
6. [Service to get all Products](#service-get-all-products)
7. [Service to get by productId](#service-get-by-productId)
8. [Service to get by productId as an optional query param](#service-get-by-product-id)

## Purpose

Daniel wellington is a serverless lambda function which runs to get the products of daniel wellington and serves as an api.
This application processes events from an API Gateway REST API. The API provides a public endpoint that you can access with a web browser or other HTTP client. When you send a request to the endpoint, the API serializes the request and sends it to the function. The function calls the Lambda API to get utilization data and returns it to the API in the required format.

![Architecture](/Daniel-wellington/images/sample-nodejs-apig.png)

## Requirements

- [Node.js 10 with npm](https://nodejs.org/en/download/releases/)

## Getting Started

To get Started please follow the below Requirements
[requirements](#requirements), you can follow these steps to get the project up and running:

```window
$ git clone https://github.com/karthick-krishnan/Daniel-Wellington.git
$ cd aws-lambda-developer-guide/sample-apps/nodejs-apig
$ npm install                   # Installs project dependencies
$ npm start                     # Compiles and launches server
$ npm test                      # Run server test cases
```

## Server Application Structure

```
├── config                   # module which contains the all config details
├── db                       # module which contains the configuration functions of dynamodb
├── handlers                 # Main module which contains the business logics of the application
├── images                   # module which contains the images
├── test                     # Main module which contains all test cases
├── utils                    # Application level utility methods/logics
├── index.js                 # Initial trigger of the serverless function
```

## API GATEWAY

```
Used An AWS API GATEWAY to create resources and methods which triggers a lambda

```

APIG URL - https://fzfelchqjd.execute-api.us-east-2.amazonaws.com/dev

## API DOCUMENTATION

```
Used two forms of API Documentation

1) Postman collections
2) Swagger Apis

```

[SWAGGER URL](https://app.swaggerhub.com/apis/karthick.taker/DW-products/1.0.0)

[POSTMAN COLLECTION](https://documenter.getpostman.com/view/14735151/TzXunKZh)

## SERVICE TO GET ALL THE PRODUCTS IN DW ASSIGNMNENT URL

- Method: `GET`

- **::** <{APIG_URL}/products>

- URL: `https://fzfelchqjd.execute-api.us-east-2.amazonaws.com/dev/products`

| Parameter | Description | Param Type | Required |
| --------- | ----------- | ---------- | -------- |
| link      | link        | Query      | NO       |

Response Json body for get all Entry APIS (Example):

```json
{
  "status": "SUCCESS",
  "errorMsg": null,
  "statusCode": 200,
  "data": {
    "products": [
      {
        "sku": "DW00100001",
        "name": "Classic Oxford 40 Rose Gold",
        "description": "This classic and aesthetically pleasing timepiece was designed with great attention to detail. The playful colors of the NATO strap blends naturally with the simple and minimalistic dial, effortlessly creating the perfect accessory.",
        "type": "watch",
        "size": "40mm",
        "price": {
          "symbol": " €",
          "amount": "159",
          "fractionDigits": 2
        },
        "currency": "EUR",
        "color": {
          "displayName": "N/A",
          "id": "Rose Gold"
        },
        "_links": {
          "productImages": {
            "title": "Product Images",
            "href": "https://assignment.dwbt.tech/images/DW00100001"
          }
        },
        "product_id": "DW00100001",
        "images": [
          {
            "order": "0",
            "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-oxford-rg_1_1.png"
          },
          {
            "order": "1",
            "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw_classic_40rg_closeup_front2.png"
          },
          {
            "order": "2",
            "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw_classic_40rg_closeup_front1.png"
          },
          {
            "order": "3",
            "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw_classic_40rg_closeup_back.png"
          },
          {
            "order": "4",
            "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl-40-oxford-rg_3.png"
          },
          {
            "order": "5",
            "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/b/o/box-classic-oxford-rg-40.png"
          }
        ]
      },
      {
        "sku": "DW00100002",
        "name": "Classic Canterbury 40 Rose Gold",
        "description": "Inspired by the gorgeous colors of a classic flag, this red, white and blue NATO band celebrates timeless preppy American fashion. The playful band, when paired with the simplistic and elegantly slim dial, gives you a timepiece that can be worn to both work and after work.",
        "type": "watch",
        "size": "40mm",
        "price": {
          "symbol": " €",
          "amount": "159",
          "fractionDigits": 2
        },
        "currency": "EUR",
        "color": {
          "displayName": "N/A",
          "id": "Rose Gold"
        },
        "_links": {
          "productImages": {
            "title": "Product Images",
            "href": "https://assignment.dwbt.tech/images/DW00100002"
          }
        },
        "product_id": "DW00100002",
        "images": [
          {
            "order": "0",
            "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-canterbury-rg_2.png"
          },
          {
            "order": "1",
            "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw_classic_40rg_closeup_front1_1.png"
          },
          {
            "order": "2",
            "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw_classic_40rg_closeup_front2_1.png"
          },
          {
            "order": "3",
            "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw_classic_40rg_closeup_back_1.png"
          },
          {
            "order": "4",
            "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl-36-canterbury-rg_3.png"
          },
          {
            "order": "5",
            "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/b/o/box-classic-canterbury-rg-40.png"
          }
        ]
      },
      {
        "sku": "DW00100003",
        "name": "Classic Cambridge 40 Rose Gold",
        "description": "Inspired by the gorgeous colors of a classic flag, this red, white and blue NATO band celebrates timeless preppy American fashion. The playful band, when paired with the simplistic and elegantly slim dial, gives you a timepiece that can be worn to both work and after work.",
        "type": "watch",
        "size": "40mm",
        "price": {
          "symbol": " €",
          "amount": "159",
          "fractionDigits": 2
        },
        "currency": "EUR",
        "color": {
          "displayName": "N/A",
          "id": "Rose Gold"
        },
        "_links": {
          "productImages": {
            "title": "Product Images",
            "href": "https://assignment.dwbt.tech/images/DW00100003"
          }
        },
        "product_id": "DW00100003",
        "images": [
          {
            "order": "0",
            "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-cambridge-rg_1.png"
          },
          {
            "order": "1",
            "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw_classic_40rg_closeup_front2_2.png"
          },
          {
            "order": "2",
            "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw_classic_40rg_closeup_front1_2.png"
          },
          {
            "order": "3",
            "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw_classic_40rg_closeup_back_2.png"
          },
          {
            "order": "4",
            "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl-40-canterbury-rg_2.png"
          },
          {
            "order": "5",
            "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/b/o/box-classic-cambridge-rg-40.png"
          }
        ]
      },
      {
        "sku": "DW00100004",
        "name": "Classic Glasgow 40 Rose Gold",
        "description": "This is a beautiful watch that celebrates the timeless and elegant nautical spirit, capturing the essence of a summer by the ocean. Perfect for those who know that the right accessory makes all the difference.",
        "type": "watch",
        "size": "40mm",
        "price": {
          "symbol": " €",
          "amount": "159",
          "fractionDigits": 2
        },
        "currency": "EUR",
        "color": {
          "displayName": "N/A",
          "id": "Rose Gold"
        },
        "_links": {
          "productImages": {
            "title": "Product Images",
            "href": "https://assignment.dwbt.tech/images/DW00100004"
          }
        },
        "product_id": "DW00100004",
        "images": [
          {
            "order": "0",
            "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-glasgow-rg_3.png"
          },
          {
            "order": "1",
            "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw_classic_40rg_closeup_front2_3.png"
          },
          {
            "order": "2",
            "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw_classic_40rg_closeup_front1_3.png"
          },
          {
            "order": "3",
            "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw_classic_40rg_closeup_back_3.png"
          },
          {
            "order": "4",
            "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl-36-glasgow-rg_3.png"
          },
          {
            "order": "5",
            "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/b/o/box-classic-glasgow-rg-40.png"
          }
        ]
      }
    ]
  }
}
```

Response Json body for error scenario (Example):

```json
{
  "statusCode": 500,
  "responseCode": "FAILED",
  "errorMsg": {
    "message": "INTERNAL SERVER ERROR"
  },
  "data": ""
}
```

## SERVICE TO GET THE PRODUCTS IN DW ASSIGNMNENT URL WITH A PRODUCT ID

- Method: `GET`

- **::** <{APIG_URL}/products/DW00100001>

- URL: `https://fzfelchqjd.execute-api.us-east-2.amazonaws.com/dev/products/DW00100001`

| Parameter | Description | Param Type | Required |
| --------- | ----------- | ---------- | -------- |
| productId | productId   | Params     | No       |

- Response Json (Example):

  ```json
  {
    "status": "SUCCESS",
    "errorMsg": null,
    "statusCode": 200,
    "data": {
      "products": [
        {
          "sku": "DW00100001",
          "name": "Classic Oxford 40 Rose Gold",
          "description": "This classic and aesthetically pleasing timepiece was designed with great attention to detail. The playful colors of the NATO strap blends naturally with the simple and minimalistic dial, effortlessly creating the perfect accessory.",
          "type": "watch",
          "size": "40mm",
          "price": {
            "symbol": " €",
            "amount": "159",
            "fractionDigits": 2
          },
          "currency": "EUR",
          "color": {
            "displayName": "N/A",
            "id": "Rose Gold"
          },
          "_links": {
            "productImages": {
              "title": "Product Images",
              "href": "https://assignment.dwbt.tech/images/DW00100001"
            }
          },
          "product_id": "DW00100001",
          "images": [
            {
              "order": "0",
              "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-oxford-rg_1_1.png"
            },
            {
              "order": "1",
              "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw_classic_40rg_closeup_front2.png"
            },
            {
              "order": "2",
              "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw_classic_40rg_closeup_front1.png"
            },
            {
              "order": "3",
              "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw_classic_40rg_closeup_back.png"
            },
            {
              "order": "4",
              "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl-40-oxford-rg_3.png"
            },
            {
              "order": "5",
              "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/b/o/box-classic-oxford-rg-40.png"
            }
          ]
        }
      ]
    }
  }
  ```

  ## SERVICE TO GET THE PRODUCTS IN DW ASSIGNMNENT URL WITH A PRODUCT ID IN A QUERY PARAMETER

- Method: `GET`

- **::** <{APIG_URL}/products?productId=DW00100001>

- URL: `https://fzfelchqjd.execute-api.us-east-2.amazonaws.com/dev/products?productId=DW00100001`

| Parameter | Description | Param Type | Required |
| --------- | ----------- | ---------- | -------- |
| productId | productId   | Params     | No       |

- Response Json (Example):

  ```json
  {
    "status": "SUCCESS",
    "errorMsg": null,
    "statusCode": 200,
    "data": {
      "products": [
        {
          "sku": "DW00100001",
          "name": "Classic Oxford 40 Rose Gold",
          "description": "This classic and aesthetically pleasing timepiece was designed with great attention to detail. The playful colors of the NATO strap blends naturally with the simple and minimalistic dial, effortlessly creating the perfect accessory.",
          "type": "watch",
          "size": "40mm",
          "price": {
            "symbol": " €",
            "amount": "159",
            "fractionDigits": 2
          },
          "currency": "EUR",
          "color": {
            "displayName": "N/A",
            "id": "Rose Gold"
          },
          "_links": {
            "productImages": {
              "title": "Product Images",
              "href": "https://assignment.dwbt.tech/images/DW00100001"
            }
          },
          "product_id": "DW00100001",
          "images": [
            {
              "order": "0",
              "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-oxford-rg_1_1.png"
            },
            {
              "order": "1",
              "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw_classic_40rg_closeup_front2.png"
            },
            {
              "order": "2",
              "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw_classic_40rg_closeup_front1.png"
            },
            {
              "order": "3",
              "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw_classic_40rg_closeup_back.png"
            },
            {
              "order": "4",
              "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl-40-oxford-rg_3.png"
            },
            {
              "order": "5",
              "src": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/b/o/box-classic-oxford-rg-40.png"
            }
          ]
        }
      ]
    }
  }
  ```

## Get requests API Exceptions

| Error code |     Error Message      |
| ---------- | :--------------------: |
| 400        |     Invalid Input      |
| 401        |      Unauthorized      |
| 403        | User is not authorized |
| 500        |         FAILED         |

# Tables

No tables are required
