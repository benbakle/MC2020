using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MC2020.Entity.Migrations
{
    public partial class seeddata : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "Percentage",
                table: "Budgets",
                type: "decimal(10,5)",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(10,5)");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AlterColumn<decimal>(
                name: "Percentage",
                table: "Budgets",
                type: "decimal(10,5)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(10,5)",
                oldNullable: true);
        }
    }
}
