﻿// <auto-generated />
using System;
using MC2020.EntityFramework;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace MC2020.Entity.Migrations
{
    [DbContext(typeof(ApplicationDataContext))]
    partial class ApplicationDataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MC2020.Models.Budget", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<decimal?>("Percentage")
                        .HasColumnType("decimal(10,5)");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(100)")
                        .HasMaxLength(100);

                    b.HasKey("Id");

                    b.ToTable("Budgets");

                    b.HasData(
                        new
                        {
                            Id = new Guid("d7f7eac5-0f2e-4118-84eb-00459cd1f226"),
                            Percentage = 0.25m,
                            Title = "Housing"
                        },
                        new
                        {
                            Id = new Guid("279359e6-56a3-4300-a76c-38ab559587f8"),
                            Percentage = 0.1m,
                            Title = "Insurance"
                        },
                        new
                        {
                            Id = new Guid("e30bb2f6-631b-4e4d-87af-0eeac7e4b208"),
                            Percentage = 0.1m,
                            Title = "Transportation"
                        },
                        new
                        {
                            Id = new Guid("4f9b432d-77cb-41df-9e08-920cc67cad51"),
                            Percentage = 0.1m,
                            Title = "Utilities"
                        },
                        new
                        {
                            Id = new Guid("3f0c69db-d062-462c-99bc-ba9190cbd41b"),
                            Percentage = 0.1m,
                            Title = "Entertainment"
                        },
                        new
                        {
                            Id = new Guid("f7ce9a36-2286-451c-8216-dab7ba6250bf"),
                            Percentage = 0.05m,
                            Title = "Clothing"
                        },
                        new
                        {
                            Id = new Guid("9adf4f9d-55d0-425e-ab45-fcafcecf4245"),
                            Percentage = 0.1m,
                            Title = "Food"
                        },
                        new
                        {
                            Id = new Guid("869315dd-bdbd-4322-9c5a-9fd9f1c3af03"),
                            Percentage = 0.1m,
                            Title = "Saving"
                        },
                        new
                        {
                            Id = new Guid("dc2914b7-a3e4-4b5a-8ed9-ad323a45a5b1"),
                            Percentage = 0.1m,
                            Title = "Miscellanieous"
                        });
                });

            modelBuilder.Entity("MC2020.Models.Transaction", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<decimal?>("Amount")
                        .HasColumnType("decimal(10,5)");

                    b.Property<Guid?>("BudgetId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<bool>("Cleared")
                        .HasColumnType("bit");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(100)")
                        .HasMaxLength(100);

                    b.Property<string>("Reference")
                        .HasColumnType("nvarchar(100)")
                        .HasMaxLength(100);

                    b.HasKey("Id");

                    b.HasIndex("BudgetId");

                    b.ToTable("Transactions");
                });

            modelBuilder.Entity("MC2020.Models.Transaction", b =>
                {
                    b.HasOne("MC2020.Models.Budget", "Budget")
                        .WithMany()
                        .HasForeignKey("BudgetId");
                });
#pragma warning restore 612, 618
        }
    }
}
