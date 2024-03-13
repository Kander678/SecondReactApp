# Use an official .NET runtime as the base image
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the .csproj file to the container
COPY *.csproj .

# Restore the NuGet packages
RUN dotnet restore

# Copy the entire application code to the container
COPY . .

# Build the application
RUN dotnet publish -c Release -o out

# Use a lightweight .NET runtime as the base image for the final stage
FROM mcr.microsoft.com/dotnet/aspnet:6.0

# Set the working directory in the container
WORKDIR /app

# Copy the built application from the previous stage
COPY --from=build /app/out .

# Expose the container port
EXPOSE 8000

# Set the command to run when the container starts
ENTRYPOINT ["dotnet", "ORM_Projekt.dll"]