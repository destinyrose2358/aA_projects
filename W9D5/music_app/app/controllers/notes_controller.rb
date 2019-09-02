class NotesController <ApplicationController


  def create
    note = Note.new(note_params)
    note.track_id = params[:track_id]
    note.user_id = current_user.id
    note.save
    redirect_to track_url(note.track_id)
  end

  def destroy
    note = Note.find(params[:id])
    if note.user_id == current_user.id
      note.destroy
      redirect_to track_url(note.track_id)
    else
      render plain: "stop trying to delete others notes, jerk.", status: 403
    end
  end

  private

  def note_params
    params.require(:note).permit(:body, :track_id)
  end


end