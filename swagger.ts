export const swaggerDocument = {
  swagger: "2.0",
  info: {
    description:
      "This is a documentation for an API created for a Igma's technical challenge.",
    version: "1.0.6",
    title: "Igma API documentation",
    contact: {
      url: "https://github.com/Danilosrr",
    },
  },
  host: `localhost:` + process.env.PORT,
  basePath: "/",
  tags: [
    {
      name: "users",
      description: "Operations about user",
    },
  ],
  schemes: ["http"],
  paths: {
    "/users": {
      post: {
        tags: ["users"],
        summary: "Create user",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "User data",
            required: true,
            schema: {
              $ref: "#/definitions/User",
            },
          },
        ],
        responses: {
          200: {
            description: "Successful operation",
            schema: {
              $ref: "#/definitions/User",
            },
          },
          422: {
            description: "Unprocessable entity",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
      get: {
        tags: ["users"],
        summary: "Vizualize existing users",
        produces: ["application/json"],
        parameters: [
          {
            name: "page",
            in: "query",
            description: "page number",
            required: false,
            type: "integer",
          },
          {
            name: "cpf",
            in: "query",
            description: "cpf to search for",
            required: false,
            type: "string / integer",
          },
        ],
        responses: {
          200: {
            description: "successful operation",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/User",
              },
            },
          },
          404: {
            description: "cpf not found",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
  },
  definitions: {
    User: {
      type: "object",
      properties: {
        username: {
          type: "string",
          example: "Jhon Doe",
        },
        cpf: {
          type: "string",
          example: "xxx.xxx.xxx-xx / xxxxxxxxxxx",
        },
        birthdate: {
          type: "string",
          example: "DD/MM/YYYYY",
        },
      },
    },
  },
};
