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
CREATE PROCEDURE RegistroPublicacion 
	-- Add the parameters for the stored procedure here
	@descripcion nvarchar(255) = NULL,
	@Tipo nvarchar(50)= NULL,
	@id_usuario int = 0
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	DECLARE @id_tipo INT;
	DECLARE @fecha nvarchar(255) = CAST(GETDATE() as NVARCHAR(255));
	SET @id_tipo = (select T.id_tipo from TipoPublicacion T where T.tipo=@Tipo);
	INSERT INTO Publicacion(descripcion,fecha,id_usuario,id_tipo) VALUES(@descripcion,@fecha,@id_usuario,@id_tipo);
END
GO