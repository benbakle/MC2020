using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MC2020.Entity.Migrations
{
    public partial class fixdecimalseeddata : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Budgets",
                keyColumn: "Id",
                keyValue: new Guid("08b9f787-d165-4190-a3d4-23385196c29c"));

            migrationBuilder.DeleteData(
                table: "Budgets",
                keyColumn: "Id",
                keyValue: new Guid("10fd730a-51f5-4a4c-8f45-52d2025c9fca"));

            migrationBuilder.DeleteData(
                table: "Budgets",
                keyColumn: "Id",
                keyValue: new Guid("4c48f19d-2222-44e5-a937-c08e295851dc"));

            migrationBuilder.DeleteData(
                table: "Budgets",
                keyColumn: "Id",
                keyValue: new Guid("4da93e21-340d-45ca-89cb-9578947b00e5"));

            migrationBuilder.DeleteData(
                table: "Budgets",
                keyColumn: "Id",
                keyValue: new Guid("4f466d41-88a2-4770-956e-146316477f7b"));

            migrationBuilder.DeleteData(
                table: "Budgets",
                keyColumn: "Id",
                keyValue: new Guid("4fc858fa-b218-4941-bd33-f896417e0b1c"));

            migrationBuilder.DeleteData(
                table: "Budgets",
                keyColumn: "Id",
                keyValue: new Guid("921d6d69-8f65-4af6-aa34-8eb4b8dd953e"));

            migrationBuilder.DeleteData(
                table: "Budgets",
                keyColumn: "Id",
                keyValue: new Guid("c6da007a-2532-4c34-8416-8ea25399942e"));

            migrationBuilder.DeleteData(
                table: "Budgets",
                keyColumn: "Id",
                keyValue: new Guid("d2ddb59c-e112-4ad7-8059-d3429520bc29"));

            migrationBuilder.InsertData(
                table: "Budgets",
                columns: new[] { "Id", "Percentage", "Title" },
                values: new object[,]
                {
                    { new Guid("d7f7eac5-0f2e-4118-84eb-00459cd1f226"), 0.25m, "Housing" },
                    { new Guid("279359e6-56a3-4300-a76c-38ab559587f8"), 0.1m, "Insurance" },
                    { new Guid("e30bb2f6-631b-4e4d-87af-0eeac7e4b208"), 0.1m, "Transportation" },
                    { new Guid("4f9b432d-77cb-41df-9e08-920cc67cad51"), 0.1m, "Utilities" },
                    { new Guid("3f0c69db-d062-462c-99bc-ba9190cbd41b"), 0.1m, "Entertainment" },
                    { new Guid("f7ce9a36-2286-451c-8216-dab7ba6250bf"), 0.05m, "Clothing" },
                    { new Guid("9adf4f9d-55d0-425e-ab45-fcafcecf4245"), 0.1m, "Food" },
                    { new Guid("869315dd-bdbd-4322-9c5a-9fd9f1c3af03"), 0.1m, "Saving" },
                    { new Guid("dc2914b7-a3e4-4b5a-8ed9-ad323a45a5b1"), 0.1m, "Miscellanieous" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Budgets",
                keyColumn: "Id",
                keyValue: new Guid("279359e6-56a3-4300-a76c-38ab559587f8"));

            migrationBuilder.DeleteData(
                table: "Budgets",
                keyColumn: "Id",
                keyValue: new Guid("3f0c69db-d062-462c-99bc-ba9190cbd41b"));

            migrationBuilder.DeleteData(
                table: "Budgets",
                keyColumn: "Id",
                keyValue: new Guid("4f9b432d-77cb-41df-9e08-920cc67cad51"));

            migrationBuilder.DeleteData(
                table: "Budgets",
                keyColumn: "Id",
                keyValue: new Guid("869315dd-bdbd-4322-9c5a-9fd9f1c3af03"));

            migrationBuilder.DeleteData(
                table: "Budgets",
                keyColumn: "Id",
                keyValue: new Guid("9adf4f9d-55d0-425e-ab45-fcafcecf4245"));

            migrationBuilder.DeleteData(
                table: "Budgets",
                keyColumn: "Id",
                keyValue: new Guid("d7f7eac5-0f2e-4118-84eb-00459cd1f226"));

            migrationBuilder.DeleteData(
                table: "Budgets",
                keyColumn: "Id",
                keyValue: new Guid("dc2914b7-a3e4-4b5a-8ed9-ad323a45a5b1"));

            migrationBuilder.DeleteData(
                table: "Budgets",
                keyColumn: "Id",
                keyValue: new Guid("e30bb2f6-631b-4e4d-87af-0eeac7e4b208"));

            migrationBuilder.DeleteData(
                table: "Budgets",
                keyColumn: "Id",
                keyValue: new Guid("f7ce9a36-2286-451c-8216-dab7ba6250bf"));

            migrationBuilder.InsertData(
                table: "Budgets",
                columns: new[] { "Id", "Percentage", "Title" },
                values: new object[,]
                {
                    { new Guid("4f466d41-88a2-4770-956e-146316477f7b"), 25m, "Housing" },
                    { new Guid("c6da007a-2532-4c34-8416-8ea25399942e"), 10m, "Insurance" },
                    { new Guid("d2ddb59c-e112-4ad7-8059-d3429520bc29"), 10m, "Transportation" },
                    { new Guid("4da93e21-340d-45ca-89cb-9578947b00e5"), 10m, "Utilities" },
                    { new Guid("921d6d69-8f65-4af6-aa34-8eb4b8dd953e"), 10m, "Entertainment" },
                    { new Guid("4fc858fa-b218-4941-bd33-f896417e0b1c"), 5m, "Clothing" },
                    { new Guid("10fd730a-51f5-4a4c-8f45-52d2025c9fca"), 10m, "Food" },
                    { new Guid("08b9f787-d165-4190-a3d4-23385196c29c"), 10m, "Saving" },
                    { new Guid("4c48f19d-2222-44e5-a937-c08e295851dc"), 10m, "Miscellanieous" }
                });
        }
    }
}
