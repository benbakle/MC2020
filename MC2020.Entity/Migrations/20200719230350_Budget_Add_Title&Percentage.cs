using Microsoft.EntityFrameworkCore.Migrations;

namespace MC2020.Entity.Migrations
{
    public partial class Budget_Add_TitlePercentage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "Percentage",
                table: "Budgets",
                type: "decimal(10,5)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Budgets",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Percentage",
                table: "Budgets");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "Budgets");
        }
    }
}
