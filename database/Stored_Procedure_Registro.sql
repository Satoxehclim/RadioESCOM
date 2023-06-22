-- ================================================
-- Template generated from Template Explorer using:
-- Create Procedure (New Menu).SQL
--
-- Use the Specify Values for Template Parameters 
-- command (Ctrl-Shift-M) to fill in the parameter 
-- values below.
--
-- This block of comments will not be included in
-- the definition of the procedure.
-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Abraham Roman
-- Create date: 22/06/2023
-- Description:	Procedimiento de prueba
-- =============================================
CREATE PROCEDURE Registro 
	-- Add the parameters for the stored procedure here
	@nombre nvarchar(50) = NULL,
	@appat nvarchar(50) = NULL,
	@apmat nvarchar(50) = NULL,
	@correo nvarchar(50) = NULL,
	@password nvarchar(50) = NULL
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	INSERT INTO Usuario(nombre,appat,apmat,correoElectronico,contraseña) VALUES(@nombre,@appat,@apmat,@correo,@password);
END
GO