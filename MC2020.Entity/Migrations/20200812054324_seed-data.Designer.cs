﻿// <auto-generated />
using System;
using MC2020.EntityFramework;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace MC2020.Entity.Migrations
{
    [DbContext(typeof(ApplicationDataContext))]
    [Migration("20200812054324_seed-data")]
    partial class seeddata
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
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
                            Id = new Guid("4f466d41-88a2-4770-956e-146316477f7b"),
                            Percentage = 25m,
                            Title = "Housing"
                        },
                        new
                        {
                            Id = new Guid("c6da007a-2532-4c34-8416-8ea25399942e"),
                            Percentage = 10m,
                            Title = "Insurance"
                        },
                        new
                        {
                            Id = new Guid("d2ddb59c-e112-4ad7-8059-d3429520bc29"),
                            Percentage = 10m,
                            Title = "Transportation"
                        },
                        new
                        {
                            Id = new Guid("4da93e21-340d-45ca-89cb-9578947b00e5"),
                            Percentage = 10m,
                            Title = "Utilities"
                        },
                        new
                        {
                            Id = new Guid("921d6d69-8f65-4af6-aa34-8eb4b8dd953e"),
                            Percentage = 10m,
                            Title = "Entertainment"
                        },
                        new
                        {
                            Id = new Guid("4fc858fa-b218-4941-bd33-f896417e0b1c"),
                            Percentage = 5m,
                            Title = "Clothing"
                        },
                        new
                        {
                            Id = new Guid("10fd730a-51f5-4a4c-8f45-52d2025c9fca"),
                            Percentage = 10m,
                            Title = "Food"
                        },
                        new
                        {
                            Id = new Guid("08b9f787-d165-4190-a3d4-23385196c29c"),
                            Percentage = 10m,
                            Title = "Saving"
                        },
                        new
                        {
                            Id = new Guid("4c48f19d-2222-44e5-a937-c08e295851dc"),
                            Percentage = 10m,
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
